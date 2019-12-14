import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегруппировывать: PerfectVerb = {
  name: Word('перегруппировывать', 11),
  singular1stPerson: Word('перегруппировываю', 11),
  singular2ndPerson: Word('перегруппировываешь', 11),
  singular3rdPerson: Word('перегруппировывает', 11),
  plural1stPerson: Word('перегруппировываем', 11),
  plural2ndPerson: Word('перегруппировываете', 11),
  plural3rdPerson: Word('перегруппировывают', 11),
  masculinePast: Word('перегруппировывал', 11),
  femininePast: Word('перегруппировывала', 11),
  neuterPast: Word('перегруппировывало', 11),
  pluralPast: Word('перегруппировывали', 11),
  imperativeInformal: Word('перегруппировывай', 11),
  imperativeFormal: Word('перегруппировывайте', 11),
  imperfect: [],
};

perfectVerbs.set(перегруппировывать.name.text, перегруппировывать);

export { перегруппировывать };