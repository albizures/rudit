import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потратить: PerfectVerb = {
  name: Word('потратить', 4),
  singular1stPerson: Word('потрачу', 4),
  singular2ndPerson: Word('потратишь', 4),
  singular3rdPerson: Word('потратит', 4),
  plural1stPerson: Word('потратим', 4),
  plural2ndPerson: Word('потратите', 4),
  plural3rdPerson: Word('потратят', 4),
  masculinePast: Word('потратил', 4),
  femininePast: Word('потратила', 4),
  neuterPast: Word('потратило', 4),
  pluralPast: Word('потратили', 4),
  imperativeInformal: Word('потрать', 4),
  imperativeFormal: Word('потратьте', 4),
  imperfect: ['тратить'],
};

perfectVerbs.set(потратить.name.text, потратить);

export { потратить };