import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предварить: PerfectVerb = {
  name: Word('предварить', 7),
  singular1stPerson: Word('предварю', 7),
  singular2ndPerson: Word('предваришь', 7),
  singular3rdPerson: Word('предварит', 7),
  plural1stPerson: Word('предварим', 7),
  plural2ndPerson: Word('предварите', 7),
  plural3rdPerson: Word('предварят', 7),
  masculinePast: Word('предварил', 7),
  femininePast: Word('предварила', 7),
  neuterPast: Word('предварило', 7),
  pluralPast: Word('предварили', 7),
  imperativeInformal: Word('предвари', 7),
  imperativeFormal: Word('предварите', 7),
  imperfect: [],
};

perfectVerbs.set(предварить.name.text, предварить);

export { предварить };