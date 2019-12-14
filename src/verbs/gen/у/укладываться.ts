import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укладываться: PerfectVerb = {
  name: Word('укладываться', 3),
  singular1stPerson: Word('укладываюсь', 3),
  singular2ndPerson: Word('укладываешься', 3),
  singular3rdPerson: Word('укладывается', 3),
  plural1stPerson: Word('укладываемся', 3),
  plural2ndPerson: Word('укладываетесь', 3),
  plural3rdPerson: Word('укладываются', 3),
  masculinePast: Word('укладывался', 3),
  femininePast: Word('укладывалась', 3),
  neuterPast: Word('укладывалось', 3),
  pluralPast: Word('укладывались', 3),
  imperativeInformal: Word('укладывайся', 3),
  imperativeFormal: Word('укладывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(укладываться.name.text, укладываться);

export { укладываться };