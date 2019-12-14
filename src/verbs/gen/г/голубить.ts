import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const голубить: PerfectVerb = {
  name: Word('голубить', 3),
  singular1stPerson: Word('голублю', 3),
  singular2ndPerson: Word('голубишь', 3),
  singular3rdPerson: Word('голубит', 3),
  plural1stPerson: Word('голубим', 3),
  plural2ndPerson: Word('голубите', 3),
  plural3rdPerson: Word('голубят', 3),
  masculinePast: Word('голубил', 3),
  femininePast: Word('голубила', 3),
  neuterPast: Word('голубило', 3),
  pluralPast: Word('голубили', 3),
  imperativeInformal: Word('голубь', 3),
  imperativeFormal: Word('голубьте', 3),
  imperfect: [],
};

perfectVerbs.set(голубить.name.text, голубить);

export { голубить };