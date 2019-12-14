import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const настаиваться: PerfectVerb = {
  name: Word('настаиваться', 4),
  singular1stPerson: Word('настаиваюсь', 4),
  singular2ndPerson: Word('настаиваешься', 4),
  singular3rdPerson: Word('настаивается', 4),
  plural1stPerson: Word('настаиваемся', 4),
  plural2ndPerson: Word('настаиваетесь', 4),
  plural3rdPerson: Word('настаиваются', 4),
  masculinePast: Word('настаивался', 4),
  femininePast: Word('настаивалась', 4),
  neuterPast: Word('настаивалось', 4),
  pluralPast: Word('настаивались', 4),
  imperativeInformal: Word('настаивайся', 4),
  imperativeFormal: Word('настаивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(настаиваться.name.text, настаиваться);

export { настаиваться };