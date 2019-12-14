import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробавляться: PerfectVerb = {
  name: Word('пробавляться', 7),
  singular1stPerson: Word('пробавляюсь', 7),
  singular2ndPerson: Word('пробавляешься', 7),
  singular3rdPerson: Word('пробавляется', 7),
  plural1stPerson: Word('пробавляемся', 7),
  plural2ndPerson: Word('пробавляетесь', 7),
  plural3rdPerson: Word('пробавляются', 7),
  masculinePast: Word('пробавлялся', 7),
  femininePast: Word('пробавлялась', 7),
  neuterPast: Word('пробавлялось', 7),
  pluralPast: Word('пробавлялись', 7),
  imperativeInformal: Word('пробавляйся', 7),
  imperativeFormal: Word('пробавляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(пробавляться.name.text, пробавляться);

export { пробавляться };