import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скитаться: PerfectVerb = {
  name: Word('скитаться', 4),
  singular1stPerson: Word('скитаюсь', 4),
  singular2ndPerson: Word('скитаешься', 4),
  singular3rdPerson: Word('скитается', 4),
  plural1stPerson: Word('скитаемся', 4),
  plural2ndPerson: Word('скитаетесь', 4),
  plural3rdPerson: Word('скитаются', 4),
  masculinePast: Word('скитался', 4),
  femininePast: Word('скиталась', 4),
  neuterPast: Word('скиталось', 4),
  pluralPast: Word('скитались', 4),
  imperativeInformal: Word('скитайся', 4),
  imperativeFormal: Word('скитайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(скитаться.name.text, скитаться);

export { скитаться };