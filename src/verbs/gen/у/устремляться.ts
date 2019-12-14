import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устремляться: PerfectVerb = {
  name: Word('устремляться', 7),
  singular1stPerson: Word('устремляюсь', 7),
  singular2ndPerson: Word('устремляешься', 7),
  singular3rdPerson: Word('устремляется', 7),
  plural1stPerson: Word('устремляемся', 7),
  plural2ndPerson: Word('устремляетесь', 7),
  plural3rdPerson: Word('устремляются', 7),
  masculinePast: Word('устремлялся', 7),
  femininePast: Word('устремлялась', 7),
  neuterPast: Word('устремлялось', 7),
  pluralPast: Word('устремлялись', 7),
  imperativeInformal: Word('устремляйся', 7),
  imperativeFormal: Word('устремляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(устремляться.name.text, устремляться);

export { устремляться };