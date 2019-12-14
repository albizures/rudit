import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озабочиваться: PerfectVerb = {
  name: Word('озабочиваться', 4),
  singular1stPerson: Word('озабочиваюсь', 4),
  singular2ndPerson: Word('озабочиваешься', 4),
  singular3rdPerson: Word('озабочивается', 4),
  plural1stPerson: Word('озабочиваемся', 4),
  plural2ndPerson: Word('озабочиваетесь', 4),
  plural3rdPerson: Word('озабочиваются', 4),
  masculinePast: Word('озабочивался', 4),
  femininePast: Word('озабочивалась', 4),
  neuterPast: Word('озабочивалось', 4),
  pluralPast: Word('озабочивались', 4),
  imperativeInformal: Word('озабочивайся', 4),
  imperativeFormal: Word('озабочивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(озабочиваться.name.text, озабочиваться);

export { озабочиваться };