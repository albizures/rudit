import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскутываться: PerfectVerb = {
  name: Word('раскутываться', 4),
  singular1stPerson: Word('раскутываюсь', 4),
  singular2ndPerson: Word('раскутываешься', 4),
  singular3rdPerson: Word('раскутывается', 4),
  plural1stPerson: Word('раскутываемся', 4),
  plural2ndPerson: Word('раскутываетесь', 4),
  plural3rdPerson: Word('раскутываются', 4),
  masculinePast: Word('раскутывался', 4),
  femininePast: Word('раскутывалась', 4),
  neuterPast: Word('раскутывалось', 4),
  pluralPast: Word('раскутывались', 4),
  imperativeInformal: Word('раскутывайся', 4),
  imperativeFormal: Word('раскутывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(раскутываться.name.text, раскутываться);

export { раскутываться };