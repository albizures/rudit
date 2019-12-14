import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сварить: PerfectVerb = {
  name: Word('сварить', 4),
  singular1stPerson: Word('сварю', 4),
  singular2ndPerson: Word('сваришь', 2),
  singular3rdPerson: Word('сварит', 2),
  plural1stPerson: Word('сварим', 2),
  plural2ndPerson: Word('сварите', 2),
  plural3rdPerson: Word('сварят', 2),
  masculinePast: Word('сварил', 4),
  femininePast: Word('сварила', 4),
  neuterPast: Word('сварило', 4),
  pluralPast: Word('сварили', 4),
  imperativeInformal: Word('свари', 4),
  imperativeFormal: Word('сварите', 4),
  imperfect: ['варить'],
};

perfectVerbs.set(сварить.name.text, сварить);

export { сварить };