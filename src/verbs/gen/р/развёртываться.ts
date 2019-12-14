import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развёртываться: PerfectVerb = {
  name: Word('развёртываться', 1),
  singular1stPerson: Word('развёртываюсь', 1),
  singular2ndPerson: Word('развёртываешься', 1),
  singular3rdPerson: Word('развёртывается', 1),
  plural1stPerson: Word('развёртываемся', 1),
  plural2ndPerson: Word('развёртываетесь', 1),
  plural3rdPerson: Word('развёртываются', 1),
  masculinePast: Word('развёртывался', 1),
  femininePast: Word('развёртывалась', 1),
  neuterPast: Word('развёртывалось', 1),
  pluralPast: Word('развёртывались', 1),
  imperativeInformal: Word('развёртывайся', 1),
  imperativeFormal: Word('развёртывайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(развёртываться.name.text, развёртываться);

export { развёртываться };