import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const понадеяться: PerfectVerb = {
  name: Word('понадеяться', 5),
  singular1stPerson: Word('понадеюсь', 5),
  singular2ndPerson: Word('понадеешься', 5),
  singular3rdPerson: Word('понадеется', 5),
  plural1stPerson: Word('понадеемся', 5),
  plural2ndPerson: Word('понадеетесь', 5),
  plural3rdPerson: Word('понадеются', 5),
  masculinePast: Word('понадеялся', 5),
  femininePast: Word('понадеялась', 5),
  neuterPast: Word('понадеялось', 5),
  pluralPast: Word('понадеялись', 5),
  imperativeInformal: Word('понадейся', 5),
  imperativeFormal: Word('понадейтесь', 5),
  imperfect: [],
};

perfectVerbs.set(понадеяться.name.text, понадеяться);

export { понадеяться };