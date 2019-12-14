import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уволить: PerfectVerb = {
  name: Word('уволить', 2),
  singular1stPerson: Word('уволю', 2),
  singular2ndPerson: Word('уволишь', 2),
  singular3rdPerson: Word('уволит', 2),
  plural1stPerson: Word('уволим', 2),
  plural2ndPerson: Word('уволите', 2),
  plural3rdPerson: Word('уволят', 2),
  masculinePast: Word('уволил', 2),
  femininePast: Word('уволила', 2),
  neuterPast: Word('уволило', 2),
  pluralPast: Word('уволили', 2),
  imperativeInformal: Word('уволь', 2),
  imperativeFormal: Word('увольте', 2),
  imperfect: ['увольнять'],
};

perfectVerbs.set(уволить.name.text, уволить);

export { уволить };