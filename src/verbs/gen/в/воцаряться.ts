import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воцаряться: PerfectVerb = {
  name: Word('воцаряться', 5),
  singular1stPerson: Word('воцаряюсь', 5),
  singular2ndPerson: Word('воцаряешься', 5),
  singular3rdPerson: Word('воцаряется', 5),
  plural1stPerson: Word('воцаряемся', 5),
  plural2ndPerson: Word('воцаряетесь', 5),
  plural3rdPerson: Word('воцаряются', 5),
  masculinePast: Word('воцарялся', 5),
  femininePast: Word('воцарялась', 5),
  neuterPast: Word('воцарялось', 5),
  pluralPast: Word('воцарялись', 5),
  imperativeInformal: Word('воцаряйся', 5),
  imperativeFormal: Word('воцаряйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(воцаряться.name.text, воцаряться);

export { воцаряться };