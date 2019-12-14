import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приспускаться: PerfectVerb = {
  name: Word('приспускаться', 8),
  singular1stPerson: Word('приспускаюсь', 8),
  singular2ndPerson: Word('приспускаешься', 8),
  singular3rdPerson: Word('приспускается', 8),
  plural1stPerson: Word('приспускаемся', 8),
  plural2ndPerson: Word('приспускаетесь', 8),
  plural3rdPerson: Word('приспускаются', 8),
  masculinePast: Word('приспускался', 8),
  femininePast: Word('приспускалась', 8),
  neuterPast: Word('приспускалось', 8),
  pluralPast: Word('приспускались', 8),
  imperativeInformal: Word('приспускайся', 8),
  imperativeFormal: Word('приспускайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(приспускаться.name.text, приспускаться);

export { приспускаться };