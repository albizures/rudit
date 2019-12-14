import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расслоиться: PerfectVerb = {
  name: Word('расслоиться', 6),
  singular1stPerson: Word('расслоюсь', 6),
  singular2ndPerson: Word('расслоишься', 6),
  singular3rdPerson: Word('расслоится', 6),
  plural1stPerson: Word('расслоимся', 6),
  plural2ndPerson: Word('расслоитесь', 6),
  plural3rdPerson: Word('расслоятся', 6),
  masculinePast: Word('расслоился', 6),
  femininePast: Word('расслоилась', 6),
  neuterPast: Word('расслоилось', 6),
  pluralPast: Word('расслоились', 6),
  imperativeInformal: Word('расслоись', 6),
  imperativeFormal: Word('расслоитесь', 6),
  imperfect: [],
};

perfectVerbs.set(расслоиться.name.text, расслоиться);

export { расслоиться };