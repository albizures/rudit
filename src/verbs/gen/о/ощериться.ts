import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ощериться: PerfectVerb = {
  name: Word('ощериться', 2),
  singular1stPerson: Word('ощерюсь', 2),
  singular2ndPerson: Word('ощеришься', 2),
  singular3rdPerson: Word('ощерится', 2),
  plural1stPerson: Word('ощеримся', 2),
  plural2ndPerson: Word('ощеритесь', 2),
  plural3rdPerson: Word('ощерятся', 2),
  masculinePast: Word('ощерился', 2),
  femininePast: Word('ощерилась', 2),
  neuterPast: Word('ощерилось', 2),
  pluralPast: Word('ощерились', 2),
  imperativeInformal: Word('ощерься', 2),
  imperativeFormal: Word('ощерьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(ощериться.name.text, ощериться);

export { ощериться };