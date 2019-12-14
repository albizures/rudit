import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замечтаться: PerfectVerb = {
  name: Word('замечтаться', 6),
  singular1stPerson: Word('замечтаюсь', 6),
  singular2ndPerson: Word('замечтаешься', 6),
  singular3rdPerson: Word('замечтается', 6),
  plural1stPerson: Word('замечтаемся', 6),
  plural2ndPerson: Word('замечтаетесь', 6),
  plural3rdPerson: Word('замечтаются', 6),
  masculinePast: Word('замечтался', 6),
  femininePast: Word('замечталась', 6),
  neuterPast: Word('замечталось', 6),
  pluralPast: Word('замечтались', 6),
  imperativeInformal: Word('замечтайся', 6),
  imperativeFormal: Word('замечтайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(замечтаться.name.text, замечтаться);

export { замечтаться };