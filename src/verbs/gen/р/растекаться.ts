import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растекаться: PerfectVerb = {
  name: Word('растекаться', 6),
  singular1stPerson: Word('растекаюсь', 6),
  singular2ndPerson: Word('растекаешься', 6),
  singular3rdPerson: Word('растекается', 6),
  plural1stPerson: Word('растекаемся', 6),
  plural2ndPerson: Word('растекаетесь', 6),
  plural3rdPerson: Word('растекаются', 6),
  masculinePast: Word('растекался', 6),
  femininePast: Word('растекалась', 6),
  neuterPast: Word('растекалось', 6),
  pluralPast: Word('растекались', 6),
  imperativeInformal: Word('растекайся', 6),
  imperativeFormal: Word('растекайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(растекаться.name.text, растекаться);

export { растекаться };