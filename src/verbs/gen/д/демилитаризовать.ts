import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const демилитаризовать: PerfectVerb = {
  name: Word('демилитаризовать', 13),
  singular1stPerson: Word('демилитаризую', 11),
  singular2ndPerson: Word('демилитаризуешь', 11),
  singular3rdPerson: Word('демилитаризует', 11),
  plural1stPerson: Word('демилитаризуем', 11),
  plural2ndPerson: Word('демилитаризуете', 11),
  plural3rdPerson: Word('демилитаризуют', 11),
  masculinePast: Word('демилитаризовал', 13),
  femininePast: Word('демилитаризовала', 13),
  neuterPast: Word('демилитаризовало', 13),
  pluralPast: Word('демилитаризовали', 13),
  imperativeInformal: Word('демилитаризуй', 11),
  imperativeFormal: Word('демилитаризуйте', 11),
  imperfect: [],
};

perfectVerbs.set(демилитаризовать.name.text, демилитаризовать);

export { демилитаризовать };