import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскаяться: PerfectVerb = {
  name: Word('раскаяться', 4),
  singular1stPerson: Word('раскаюсь', 4),
  singular2ndPerson: Word('раскаешься', 4),
  singular3rdPerson: Word('раскается', 4),
  plural1stPerson: Word('раскаемся', 4),
  plural2ndPerson: Word('раскаетесь', 4),
  plural3rdPerson: Word('раскаются', 4),
  masculinePast: Word('раскаялся', 4),
  femininePast: Word('раскаялась', 4),
  neuterPast: Word('раскаялось', 4),
  pluralPast: Word('раскаялись', 4),
  imperativeInformal: Word('раскайся', 4),
  imperativeFormal: Word('раскайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(раскаяться.name.text, раскаяться);

export { раскаяться };