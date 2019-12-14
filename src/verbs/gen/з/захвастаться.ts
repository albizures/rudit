import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захвастаться: PerfectVerb = {
  name: Word('захвастаться', 4),
  singular1stPerson: Word('захвастаюсь', 4),
  singular2ndPerson: Word('захвастаешься', 4),
  singular3rdPerson: Word('захвастается', 4),
  plural1stPerson: Word('захвастаемся', 4),
  plural2ndPerson: Word('захвастаетесь', 4),
  plural3rdPerson: Word('захвастаются', 4),
  masculinePast: Word('захвастался', 4),
  femininePast: Word('захвасталась', 4),
  neuterPast: Word('захвасталось', 4),
  pluralPast: Word('захвастались', 4),
  imperativeInformal: Word('захвастайся', 4),
  imperativeFormal: Word('захвастайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(захвастаться.name.text, захвастаться);

export { захвастаться };