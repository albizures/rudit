import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пленяться: PerfectVerb = {
  name: Word('пленяться', 4),
  singular1stPerson: Word('пленяюсь', 4),
  singular2ndPerson: Word('пленяешься', 4),
  singular3rdPerson: Word('пленяется', 4),
  plural1stPerson: Word('пленяемся', 4),
  plural2ndPerson: Word('пленяетесь', 4),
  plural3rdPerson: Word('пленяются', 4),
  masculinePast: Word('пленялся', 4),
  femininePast: Word('пленялась', 4),
  neuterPast: Word('пленялось', 4),
  pluralPast: Word('пленялись', 4),
  imperativeInformal: Word('пленяйся', 4),
  imperativeFormal: Word('пленяйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(пленяться.name.text, пленяться);

export { пленяться };