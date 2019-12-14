import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспомнить: PerfectVerb = {
  name: Word('вспомнить', 3),
  singular1stPerson: Word('вспомню', 3),
  singular2ndPerson: Word('вспомнишь', 3),
  singular3rdPerson: Word('вспомнит', 3),
  plural1stPerson: Word('вспомним', 3),
  plural2ndPerson: Word('вспомните', 3),
  plural3rdPerson: Word('вспомнят', 3),
  masculinePast: Word('вспомнил', 3),
  femininePast: Word('вспомнила', 3),
  neuterPast: Word('вспомнило', 3),
  pluralPast: Word('вспомнили', 3),
  imperativeInformal: Word('вспомни', 3),
  imperativeFormal: Word('вспомните', 3),
  imperfect: ['вспоминать'],
};

perfectVerbs.set(вспомнить.name.text, вспомнить);

export { вспомнить };