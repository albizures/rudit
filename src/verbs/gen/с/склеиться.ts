import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const склеиться: PerfectVerb = {
  name: Word('склеиться', 3),
  singular1stPerson: Word('склеюсь', 3),
  singular2ndPerson: Word('склеишься', 3),
  singular3rdPerson: Word('склеится', 3),
  plural1stPerson: Word('склеимся', 3),
  plural2ndPerson: Word('склеитесь', 3),
  plural3rdPerson: Word('склеятся', 3),
  masculinePast: Word('склеился', 3),
  femininePast: Word('склеилась', 3),
  neuterPast: Word('склеилось', 3),
  pluralPast: Word('склеились', 3),
  imperativeInformal: Word('склейся', 3),
  imperativeFormal: Word('склейтесь', 3),
  imperfect: [],
};

perfectVerbs.set(склеиться.name.text, склеиться);

export { склеиться };