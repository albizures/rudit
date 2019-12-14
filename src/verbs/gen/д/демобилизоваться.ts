import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const демобилизоваться: PerfectVerb = {
  name: Word('демобилизоваться', 11),
  singular1stPerson: Word('демобилизуюсь', 9),
  singular2ndPerson: Word('демобилизуешься', 9),
  singular3rdPerson: Word('демобилизуется', 9),
  plural1stPerson: Word('демобилизуемся', 9),
  plural2ndPerson: Word('демобилизуетесь', 9),
  plural3rdPerson: Word('демобилизуются', 9),
  masculinePast: Word('демобилизовался', 11),
  femininePast: Word('демобилизовалась', 11),
  neuterPast: Word('демобилизовалось', 11),
  pluralPast: Word('демобилизовались', 11),
  imperativeInformal: Word('демобилизуйся', 9),
  imperativeFormal: Word('демобилизуйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(демобилизоваться.name.text, демобилизоваться);

export { демобилизоваться };