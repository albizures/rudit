import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const терзаться: PerfectVerb = {
  name: Word('терзаться', 4),
  singular1stPerson: Word('терзаюсь', 4),
  singular2ndPerson: Word('терзаешься', 4),
  singular3rdPerson: Word('терзается', 4),
  plural1stPerson: Word('терзаемся', 4),
  plural2ndPerson: Word('терзаетесь', 4),
  plural3rdPerson: Word('терзаются', 4),
  masculinePast: Word('терзался', 4),
  femininePast: Word('терзалась', 4),
  neuterPast: Word('терзалось', 4),
  pluralPast: Word('терзались', 4),
  imperativeInformal: Word('терзайся', 4),
  imperativeFormal: Word('терзайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(терзаться.name.text, терзаться);

export { терзаться };