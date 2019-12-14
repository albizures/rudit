import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскладываться: PerfectVerb = {
  name: Word('раскладываться', 5),
  singular1stPerson: Word('раскладываюсь', 5),
  singular2ndPerson: Word('раскладываешься', 5),
  singular3rdPerson: Word('раскладывается', 5),
  plural1stPerson: Word('раскладываемся', 5),
  plural2ndPerson: Word('раскладываетесь', 5),
  plural3rdPerson: Word('раскладываются', 5),
  masculinePast: Word('раскладывался', 5),
  femininePast: Word('раскладывалась', 5),
  neuterPast: Word('раскладывалось', 5),
  pluralPast: Word('раскладывались', 5),
  imperativeInformal: Word('раскладывайся', 5),
  imperativeFormal: Word('раскладывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(раскладываться.name.text, раскладываться);

export { раскладываться };