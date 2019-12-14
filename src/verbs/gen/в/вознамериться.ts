import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вознамериться: PerfectVerb = {
  name: Word('вознамериться', 6),
  singular1stPerson: Word('вознамерюсь', 6),
  singular2ndPerson: Word('вознамеришься', 6),
  singular3rdPerson: Word('вознамерится', 6),
  plural1stPerson: Word('вознамеримся', 6),
  plural2ndPerson: Word('вознамеритесь', 6),
  plural3rdPerson: Word('вознамерятся', 6),
  masculinePast: Word('вознамерился', 6),
  femininePast: Word('вознамерилась', 6),
  neuterPast: Word('вознамерилось', 6),
  pluralPast: Word('вознамерились', 6),
  imperativeInformal: Word('вознамерься', 6),
  imperativeFormal: Word('вознамерьтесь', 6),
  imperfect: [],
};

perfectVerbs.set(вознамериться.name.text, вознамериться);

export { вознамериться };