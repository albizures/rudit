import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспроизводить: PerfectVerb = {
  name: Word('воспроизводить', 11),
  singular1stPerson: Word('воспроизвожу', 11),
  singular2ndPerson: Word('воспроизводишь', 9),
  singular3rdPerson: Word('воспроизводит', 9),
  plural1stPerson: Word('воспроизводим', 9),
  plural2ndPerson: Word('воспроизводите', 9),
  plural3rdPerson: Word('воспроизводят', 9),
  masculinePast: Word('воспроизводил', 11),
  femininePast: Word('воспроизводила', 11),
  neuterPast: Word('воспроизводило', 11),
  pluralPast: Word('воспроизводили', 11),
  imperativeInformal: Word('воспроизводи', 11),
  imperativeFormal: Word('воспроизводите', 11),
  imperfect: [],
};

perfectVerbs.set(воспроизводить.name.text, воспроизводить);

export { воспроизводить };