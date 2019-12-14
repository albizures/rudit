import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укутываться: PerfectVerb = {
  name: Word('укутываться', 2),
  singular1stPerson: Word('укутываюсь', 2),
  singular2ndPerson: Word('укутываешься', 2),
  singular3rdPerson: Word('укутывается', 2),
  plural1stPerson: Word('укутываемся', 2),
  plural2ndPerson: Word('укутываетесь', 2),
  plural3rdPerson: Word('укутываются', 2),
  masculinePast: Word('укутывался', 2),
  femininePast: Word('укутывалась', 2),
  neuterPast: Word('укутывалось', 2),
  pluralPast: Word('укутывались', 2),
  imperativeInformal: Word('укутывайся', 2),
  imperativeFormal: Word('укутывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(укутываться.name.text, укутываться);

export { укутываться };