import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const двоиться: PerfectVerb = {
  name: Word('двоиться', 3),
  singular1stPerson: Word('двоюсь', 3),
  singular2ndPerson: Word('двоишься', 3),
  singular3rdPerson: Word('двоится', 3),
  plural1stPerson: Word('двоимся', 3),
  plural2ndPerson: Word('двоитесь', 3),
  plural3rdPerson: Word('двоятся', 3),
  masculinePast: Word('двоился', 3),
  femininePast: Word('двоилась', 3),
  neuterPast: Word('двоилось', 3),
  pluralPast: Word('двоились', 3),
  imperativeInformal: Word('двоись', 3),
  imperativeFormal: Word('двоитесь', 3),
  imperfect: [],
};

perfectVerbs.set(двоиться.name.text, двоиться);

export { двоиться };