import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развёртываться: PerfectVerb = {
  name: Word('развёртываться', 4),
  singular1stPerson: Word('развёртываюсь', 4),
  singular2ndPerson: Word('развёртываешься', 4),
  singular3rdPerson: Word('развёртывается', 4),
  plural1stPerson: Word('развёртываемся', 4),
  plural2ndPerson: Word('развёртываетесь', 4),
  plural3rdPerson: Word('развёртываются', 4),
  masculinePast: Word('развёртывался', 4),
  femininePast: Word('развёртывалась', 4),
  neuterPast: Word('развёртывалось', 4),
  pluralPast: Word('развёртывались', 4),
  imperativeInformal: Word('развёртывайся', 4),
  imperativeFormal: Word('развёртывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(развёртываться.name.text, развёртываться);

export { развёртываться };