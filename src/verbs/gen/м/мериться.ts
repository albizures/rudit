import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мериться: PerfectVerb = {
  name: Word('мериться', 1),
  singular1stPerson: Word('мерюсь', 1),
  singular2ndPerson: Word('меришься', 1),
  singular3rdPerson: Word('мерится', 1),
  plural1stPerson: Word('меримся', 1),
  plural2ndPerson: Word('меритесь', 1),
  plural3rdPerson: Word('мерятся', 1),
  masculinePast: Word('мерился', 1),
  femininePast: Word('мерилась', 1),
  neuterPast: Word('мерилось', 1),
  pluralPast: Word('мерились', 1),
  imperativeInformal: Word('мерься', 1),
  imperativeFormal: Word('мерьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(мериться.name.text, мериться);

export { мериться };