import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скончаться: PerfectVerb = {
  name: Word('скончаться', 5),
  singular1stPerson: Word('скончаюсь', 5),
  singular2ndPerson: Word('скончаешься', 5),
  singular3rdPerson: Word('скончается', 5),
  plural1stPerson: Word('скончаемся', 5),
  plural2ndPerson: Word('скончаетесь', 5),
  plural3rdPerson: Word('скончаются', 5),
  masculinePast: Word('скончался', 5),
  femininePast: Word('скончалась', 5),
  neuterPast: Word('скончалось', 5),
  pluralPast: Word('скончались', 5),
  imperativeInformal: Word('скончайся', 5),
  imperativeFormal: Word('скончайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(скончаться.name.text, скончаться);

export { скончаться };