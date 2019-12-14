import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лосниться: PerfectVerb = {
  name: Word('лосниться', 4),
  singular1stPerson: Word('лоснюсь', 4),
  singular2ndPerson: Word('лоснишься', 4),
  singular3rdPerson: Word('лоснится', 4),
  plural1stPerson: Word('лоснимся', 4),
  plural2ndPerson: Word('лоснитесь', 4),
  plural3rdPerson: Word('лоснятся', 4),
  masculinePast: Word('лоснился', 4),
  femininePast: Word('лоснилась', 4),
  neuterPast: Word('лоснилось', 4),
  pluralPast: Word('лоснились', 4),
  imperativeInformal: Word('лоснись', 4),
  imperativeFormal: Word('лоснитесь', 4),
  imperfect: [],
};

perfectVerbs.set(лосниться.name.text, лосниться);

export { лосниться };