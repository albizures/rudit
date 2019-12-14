import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расхвастаться: PerfectVerb = {
  name: Word('расхвастаться', 5),
  singular1stPerson: Word('расхвастаюсь', 5),
  singular2ndPerson: Word('расхвастаешься', 5),
  singular3rdPerson: Word('расхвастается', 5),
  plural1stPerson: Word('расхвастаемся', 5),
  plural2ndPerson: Word('расхвастаетесь', 5),
  plural3rdPerson: Word('расхвастаются', 5),
  masculinePast: Word('расхвастался', 5),
  femininePast: Word('расхвасталась', 5),
  neuterPast: Word('расхвасталось', 5),
  pluralPast: Word('расхвастались', 5),
  imperativeInformal: Word('расхвастайся', 5),
  imperativeFormal: Word('расхвастайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(расхвастаться.name.text, расхвастаться);

export { расхвастаться };