import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измаяться: PerfectVerb = {
  name: Word('измаяться', 3),
  singular1stPerson: Word('измаюсь', 3),
  singular2ndPerson: Word('измаешься', 3),
  singular3rdPerson: Word('измается', 3),
  plural1stPerson: Word('измаемся', 3),
  plural2ndPerson: Word('измаетесь', 3),
  plural3rdPerson: Word('измаются', 3),
  masculinePast: Word('измаялся', 3),
  femininePast: Word('измаялась', 3),
  neuterPast: Word('измаялось', 3),
  pluralPast: Word('измаялись', 3),
  imperativeInformal: Word('измайся', 3),
  imperativeFormal: Word('измайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(измаяться.name.text, измаяться);

export { измаяться };