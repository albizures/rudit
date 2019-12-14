import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const болтаться: PerfectVerb = {
  name: Word('болтаться', 4),
  singular1stPerson: Word('болтаюсь', 4),
  singular2ndPerson: Word('болтаешься', 4),
  singular3rdPerson: Word('болтается', 4),
  plural1stPerson: Word('болтаемся', 4),
  plural2ndPerson: Word('болтаетесь', 4),
  plural3rdPerson: Word('болтаются', 4),
  masculinePast: Word('болтался', 4),
  femininePast: Word('болталась', 4),
  neuterPast: Word('болталось', 4),
  pluralPast: Word('болтались', 4),
  imperativeInformal: Word('болтайся', 4),
  imperativeFormal: Word('болтайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(болтаться.name.text, болтаться);

export { болтаться };