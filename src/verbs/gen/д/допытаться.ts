import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const допытаться: PerfectVerb = {
  name: Word('допытаться', 5),
  singular1stPerson: Word('допытаюсь', 5),
  singular2ndPerson: Word('допытаешься', 5),
  singular3rdPerson: Word('допытается', 5),
  plural1stPerson: Word('допытаемся', 5),
  plural2ndPerson: Word('допытаетесь', 5),
  plural3rdPerson: Word('допытаются', 5),
  masculinePast: Word('допытался', 5),
  femininePast: Word('допыталась', 5),
  neuterPast: Word('допыталось', 5),
  pluralPast: Word('допытались', 5),
  imperativeInformal: Word('допытайся', 5),
  imperativeFormal: Word('допытайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(допытаться.name.text, допытаться);

export { допытаться };