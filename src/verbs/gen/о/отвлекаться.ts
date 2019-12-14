import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвлекаться: PerfectVerb = {
  name: Word('отвлекаться', 6),
  singular1stPerson: Word('отвлекаюсь', 6),
  singular2ndPerson: Word('отвлекаешься', 6),
  singular3rdPerson: Word('отвлекается', 6),
  plural1stPerson: Word('отвлекаемся', 6),
  plural2ndPerson: Word('отвлекаетесь', 6),
  plural3rdPerson: Word('отвлекаются', 6),
  masculinePast: Word('отвлекался', 6),
  femininePast: Word('отвлекалась', 6),
  neuterPast: Word('отвлекалось', 6),
  pluralPast: Word('отвлекались', 6),
  imperativeInformal: Word('отвлекайся', 6),
  imperativeFormal: Word('отвлекайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(отвлекаться.name.text, отвлекаться);

export { отвлекаться };