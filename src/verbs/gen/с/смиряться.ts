import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смиряться: PerfectVerb = {
  name: Word('смиряться', 4),
  singular1stPerson: Word('смиряюсь', 4),
  singular2ndPerson: Word('смиряешься', 4),
  singular3rdPerson: Word('смиряется', 4),
  plural1stPerson: Word('смиряемся', 4),
  plural2ndPerson: Word('смиряетесь', 4),
  plural3rdPerson: Word('смиряются', 4),
  masculinePast: Word('смирялся', 4),
  femininePast: Word('смирялась', 4),
  neuterPast: Word('смирялось', 4),
  pluralPast: Word('смирялись', 4),
  imperativeInformal: Word('смиряйся', 4),
  imperativeFormal: Word('смиряйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(смиряться.name.text, смиряться);

export { смиряться };