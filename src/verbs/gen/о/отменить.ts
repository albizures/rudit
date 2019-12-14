import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отменить: PerfectVerb = {
  name: Word('отменить', 5),
  singular1stPerson: Word('отменю', 5),
  singular2ndPerson: Word('отменишь', 3),
  singular3rdPerson: Word('отменит', 3),
  plural1stPerson: Word('отменим', 3),
  plural2ndPerson: Word('отмените', 3),
  plural3rdPerson: Word('отменят', 3),
  masculinePast: Word('отменил', 5),
  femininePast: Word('отменила', 5),
  neuterPast: Word('отменило', 5),
  pluralPast: Word('отменили', 5),
  imperativeInformal: Word('отмени', 5),
  imperativeFormal: Word('отмените', 5),
  imperfect: ['отменять'],
};

perfectVerbs.set(отменить.name.text, отменить);

export { отменить };