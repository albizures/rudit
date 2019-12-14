import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уведомить: PerfectVerb = {
  name: Word('уведомить', 2),
  singular1stPerson: Word('уведомлю', 2),
  singular2ndPerson: Word('уведомишь', 2),
  singular3rdPerson: Word('уведомит', 2),
  plural1stPerson: Word('уведомим', 2),
  plural2ndPerson: Word('уведомите', 2),
  plural3rdPerson: Word('уведомят', 2),
  masculinePast: Word('уведомил', 2),
  femininePast: Word('уведомила', 2),
  neuterPast: Word('уведомило', 2),
  pluralPast: Word('уведомили', 2),
  imperativeInformal: Word('уведоми//уве'домь', 2),
  imperativeFormal: Word('уведомьте', 2),
  imperfect: [],
};

perfectVerbs.set(уведомить.name.text, уведомить);

export { уведомить };