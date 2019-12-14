import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одурманиваться: PerfectVerb = {
  name: Word('одурманиваться', 5),
  singular1stPerson: Word('одурманиваюсь', 5),
  singular2ndPerson: Word('одурманиваешься', 5),
  singular3rdPerson: Word('одурманивается', 5),
  plural1stPerson: Word('одурманиваемся', 5),
  plural2ndPerson: Word('одурманиваетесь', 5),
  plural3rdPerson: Word('одурманиваются', 5),
  masculinePast: Word('одурманивался', 5),
  femininePast: Word('одурманивалась', 5),
  neuterPast: Word('одурманивалось', 5),
  pluralPast: Word('одурманивались', 5),
  imperativeInformal: Word('одурманивайся', 5),
  imperativeFormal: Word('одурманивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(одурманиваться.name.text, одурманиваться);

export { одурманиваться };