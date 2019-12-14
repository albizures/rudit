import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нахвастаться: PerfectVerb = {
  name: Word('нахвастаться', 4),
  singular1stPerson: Word('нахвастаюсь', 4),
  singular2ndPerson: Word('нахвастаешься', 4),
  singular3rdPerson: Word('нахвастается', 4),
  plural1stPerson: Word('нахвастаемся', 4),
  plural2ndPerson: Word('нахвастаетесь', 4),
  plural3rdPerson: Word('нахвастаются', 4),
  masculinePast: Word('нахвастался', 4),
  femininePast: Word('нахвасталась', 4),
  neuterPast: Word('нахвасталось', 4),
  pluralPast: Word('нахвастались', 4),
  imperativeInformal: Word('нахвастайся', 4),
  imperativeFormal: Word('нахвастайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(нахвастаться.name.text, нахвастаться);

export { нахвастаться };