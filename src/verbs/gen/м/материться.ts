import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const материться: PerfectVerb = {
  name: Word('материться', 5),
  singular1stPerson: Word('матерюсь', 5),
  singular2ndPerson: Word('материшься', 5),
  singular3rdPerson: Word('матерится', 5),
  plural1stPerson: Word('материмся', 5),
  plural2ndPerson: Word('материтесь', 5),
  plural3rdPerson: Word('матерятся', 5),
  masculinePast: Word('матерился', 5),
  femininePast: Word('материлась', 5),
  neuterPast: Word('материлось', 5),
  pluralPast: Word('матерились', 5),
  imperativeInformal: Word('матерись', 5),
  imperativeFormal: Word('материтесь', 5),
  imperfect: [],
};

perfectVerbs.set(материться.name.text, материться);

export { материться };