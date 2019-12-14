import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебаллотировывать: PerfectVerb = {
  name: Word('перебаллотировывать', 12),
  singular1stPerson: Word('перебаллотировываю', 12),
  singular2ndPerson: Word('перебаллотировываешь', 12),
  singular3rdPerson: Word('перебаллотировывает', 12),
  plural1stPerson: Word('перебаллотировываем', 12),
  plural2ndPerson: Word('перебаллотировываете', 12),
  plural3rdPerson: Word('перебаллотировывают', 12),
  masculinePast: Word('перебаллотировывал', 12),
  femininePast: Word('перебаллотировывала', 12),
  neuterPast: Word('перебаллотировывало', 12),
  pluralPast: Word('перебаллотировывали', 12),
  imperativeInformal: Word('перебаллотировывай', 12),
  imperativeFormal: Word('перебаллотировывайте', 12),
  imperfect: [],
};

perfectVerbs.set(перебаллотировывать.name.text, перебаллотировывать);

export { перебаллотировывать };