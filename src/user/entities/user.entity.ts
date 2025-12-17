import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Index({ unique: true })
  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'varchar', length: 255, select: false })
  password: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'int', nullable: true })
  age: number | null;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'varchar', length: 15, nullable: true })
  phone: string | null;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt: Date;
}

