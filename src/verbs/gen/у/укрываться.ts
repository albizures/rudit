import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укрываться: PerfectVerb = {
  name: Word('укрываться', 5),
  singular1stPerson: Word('укрываюсь', 5),
  singular2ndPerson: Word('укрываешься', 5),
  singular3rdPerson: Word('укрывается', 5),
  plural1stPerson: Word('укрываемся', 5),
  plural2ndPerson: Word('укрываетесь', 5),
  plural3rdPerson: Word('укрываются', 5),
  masculinePast: Word('укрывался', 5),
  femininePast: Word('укрывалась', 5),
  neuterPast: Word('укрывалось', 5),
  pluralPast: Word('укрывались', 5),
  imperativeInformal: Word('укрывайся', 5),
  imperativeFormal: Word('укрывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(укрываться.name.text, укрываться);

export { укрываться };